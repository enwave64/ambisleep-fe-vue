// Adapted from: https://dmitripavlutin.com/timeout-fetch-request/
export const fetchWithTimeout = async (resource, options = {}) => {
  const { timeout = 8000 } = options  // 8000 ms = 8 seconds

  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  })
  clearTimeout(id)
  return response
}

export const executeHttpsCall = async ({ url, fetchParams }) => {
  try {
    // console.log(`fetchParams.body=${fetchParams.body}`)
    const response = await fetchWithTimeout(url, fetchParams)
    // console.log('response:', response)
    if (!response.ok) {
      const text = await response.text()
      const msg = `HTTP error, status=${response.status}, text=${text}`
      return { error: msg }
    }
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return {}  // successful call with no JSON response (e.g. a 'PUT' call)
    }
    const result = await response.json()
    // console.log('result:', result)
    if (!result) {
      return { error: 'no result' }
    }
    return result
  } catch (e) {
    if (e.name === 'AbortError') {
      return { error: 'timeout error' }
    } else {
      return { error: e }
    }
  }
}

export const getJsonHttpsCall = async ({ url, timeout }) => {
  const fetchParams = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    timeout,
  }

  return await executeHttpsCall({ url, fetchParams })
}

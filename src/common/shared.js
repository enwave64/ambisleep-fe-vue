export const getEnv = (name) => window?.configs?.[name] || import.meta.env[name] || ''

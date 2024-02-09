 const flattenMessages = (nestedMessages: Record<string, any> | null, prefix = ''): Record<string, string> => {
    if (nestedMessages === null) {
      return {}
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
      const value = nestedMessages[key]
      const prefixedKey = prefix ? `${prefix}.${key}` : key
  
      if (typeof value === 'string') {
        Object.assign(messages, { [prefixedKey]: value })
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey))
      }
  
      return messages
    }, {} as Record<string, string>)
  }
  
  export default flattenMessages;
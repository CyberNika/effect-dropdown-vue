const getTransformValue = (key, value) => `${key}(${value})`

export const transform = (values = {}) => {
  const result = []

  Object.keys(values).forEach((key) => {
    const value = Array.isArray(values[key]) ? values[key].join(', ') : values[key]

    result.push(getTransformValue(key, value))
  })

  return result.join(' ')
}

export const assign = (...sources) => Object.assign({}, ...sources)

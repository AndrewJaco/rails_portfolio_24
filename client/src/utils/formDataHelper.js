function objectToFormData(
  obj,
  namespace = null,
  formData = new FormData()
  ) {
  for( let propertyName in obj ) {
    if (isValidProperty(obj, propertyName)) {
      const formKey = getFormKey(namespace, propertyName);

      appendToFormData(formData, formKey, obj[propertyName]);
    }
  }
  return formData;
}

const isValidProperty = (obj, propertyName) => {
  return (
    Object.prototype.hasOwnProperty.call(obj, propertyName) && 
      obj[propertyName] !== undefined && 
      obj[propertyName] !== null
  )
}

const getFormKey = (namespace, propertyName) => {
  return namespace ? `${namespace}[${propertyName}]` : propertyName;
}

const appendToFormData = (formData, formKey, value) => {
  if (value instanceof Date) {
    appendAsDate(formData, formKey, value);
  } else if (isObjectButNotFile(value)) {
    objectToFormData(value, formKey, formData);
  } else { 
    formData.append(formKey, value);
  }
}

const appendAsDate = (formData, formKey, date) => {
  formData.append(formKey, date.toISOString());
}

const isObjectButNotFile = (value) => {
  return typeof value === 'object' && !(value instanceof File);
}

export default objectToFormData;
import isUrl from 'validator/lib/isURL';

const validationOptions = {
    require_protocol: true,
};

const urlValidator = (urlString) => {
    return isUrl(urlString, validationOptions);
};

export default urlValidator;
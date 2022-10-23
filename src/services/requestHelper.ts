import { AxiosPromise } from 'axios';
import { notification } from 'antd';

const axiosRequestHandler = <T = any>(request: AxiosPromise<T>) => {
    return request
        .then((res) => res.data)
        .catch((error) => notification.error({
            message: error
        }))
}

export const requestHelper = {
    axiosRequestHandler,
}
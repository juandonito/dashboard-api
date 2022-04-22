import AppError from "./AppError";
import HttpCode from "./HttpCode";

export default class CommonError {

    // ===== USER =====

    static HttpUserNotFound = () => new AppError('Could not find user', HttpCode.NOT_FOUND, 'User could not be found', true)
    
    // ===== AUTHENTICATION =====
    
    static HttpUnauthenticated = () => new AppError('Not authenticated', HttpCode.UNAUTHENTICATED, 'You should authenticate', true)
    static HttpUnauthorized = () => new AppError('Not authorized', HttpCode.UNAUTHORIZED, 'You do not have access to this resource', true)

    // ===== TASK =====

    static HttpTaskNotFound = () => new AppError('Could not find this task', HttpCode.NOT_FOUND, 'Could not find task', true)
}

class ApiError extends Error {
    constructor(
        statusCode,
        message = 'Something Went Wrong!',
        errors =[],
        stack= ""
    ){

        super(message)
        this.statusCode = statusCode
        this.message = message
        this.error = errors
        this.data = null
        this.success = false

        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrack(this, this.constructor)
        }

    }
}

export {ApiError}
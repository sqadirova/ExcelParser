const ErrorResponse = require("../utils/errorResponse");

const errorHandler=(err,req,res,next)=>{
    let error={...err};

    error.message=err.message;

    //Log to console for dev
    console.log(err.stack);


    if (err.name==='TypeError'){
        const message=`Resource not found`;
        error=new ErrorResponse(message,404);
    }

    // if (err.name==='CastError'){
    //     const message=`Resource not found`;
    //     error=new ErrorResponse(message,404);
    // }


    res.status(error.statusCode || 500).json({
        success:false,
        error:error.message || 'Server Error'
    });
};

module.exports=errorHandler;

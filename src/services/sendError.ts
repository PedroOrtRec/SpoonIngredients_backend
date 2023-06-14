function sendError(error: unknown){
    if (error instanceof Error)
        return { fatal: error.message }
}

export default sendError
export const getallApplicants = async(req, res)=>{
    res.end("all application for req.params.id job")
    }
    export const addNewApplicant = async(req, res)=>{
        res.end("add req.params.applicantId applicant to req.params.id job")
    }
    export const deleteApplicant = async(req, res)=>{
        res.end("delete req.params.applicantId applicant from req.params.id job")
    }
    
    export const updateApplicant = async(req, res)=>{
        res.end("update applicant detail") 
        
    }
    export const getSingleApplicant = async(req, res)=>{
        res.end("get req.params.applicantId applicant from req.params.id job")
    }
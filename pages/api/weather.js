export default async (req,res) => {
    try {
        if(req.body){
            console.log('hurrah')
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
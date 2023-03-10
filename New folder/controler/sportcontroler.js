import Sports from "../model/sport.js"


export const sportsReg = async (req, res) => {
    let sportCode = req.body.sportCode
    let exSports = await Sports.findOne({ sportCode:sportCode })
    if (exSports) {
        return res.status(400).json({ message: "Sports is Already Exist !" })
    }
    else {
        
            let register = new Sports({
                sportCode:req.body.sportCode,
                sportsName: req.body.sportsName,
                userId:req.body.userId,
            })
            try {
                let sport=await register.save()
                res.status(201).json({ message: sport })
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        
    }
}

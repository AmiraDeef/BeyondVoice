const stringSimilarity = require("string-similarity")

const calcMatchingScore = (candidate, job) => {
    let score = 0;
    if (job.requirements && candidate.skills && candidate.skills.length > 0) {
        const jobRequirementsLower = job.requirements.toLowerCase();
        
        const matchingSkills = candidate.skills.filter(skill => jobRequirementsLower.includes(skill.toLowerCase()))

        //Applicator's Array skills with string requirement Job
        let skillsScore = matchingSkills.length * 15;
        if (skillsScore > 50) skillsScore = 50;
        score += skillsScore;
    }
    //title with tittle using string-similarity lib
    if (candidate.title && job.title) {
        const similarty = stringSimilarity.compareTwoStrings(
            job.title.toLowerCase(), candidate.title.toLowerCase()
        )
        score += similarty * 20
    }
    if (candidate.industry && job.category) {

        const similarty = stringSimilarity.compareTwoStrings(
            candidate.industry.toLowerCase(), job.category.toLowerCase()
        )
        score += similarty * 20
    }
    if (candidate.workType && job.workType && candidate.workType.toLowerCase() === job.workType.toLowerCase()) {
        score += 15;
    }




    return Math.round(score);

}


module.exports = calcMatchingScore;
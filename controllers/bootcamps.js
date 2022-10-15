// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ 
        success: true, 
        msg: 'Show all bootcamps'
    });
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ 
        success: true, 
        msg: `Get bootcamp ${req.params.id}`
    });
}

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps/
// @access    Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ 
        success: true, 
        msg: 'Create new bootcamp'
    });
}

// @desc      Update a bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootCamp = (req, res, next) => {
    res.status(200).json({ 
        success: true, 
        msg: `Get bootcamp ${req.params.id}`
    });
}

// @desc      Delete a bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootCamp = (req, res, next) => {
    res.status(200).json({ 
        success: true, 
        msg: `Delete bootcamp ${req.params.id}`
    });
}
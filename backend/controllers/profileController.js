const asyncHandler = require('express-async-handler')

const Profile = require('../models/profileModel')

const getProfiles = asyncHandler(async (req, res) => {
  const profiles = await Profile.find()
  res.status(200).json(profiles)
})

const setProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.create({
    name: req.body.name,
    lastName: req.body.lastName,
    summary: req.body.summary,
    age: req.body.age,
    email: req.body.email,
    city: req.body.city,
    country: req.body.country
  })
  res.status(200).json(profile)
})

const updateProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id)

  if(!profile){
    res.status(400)
    throw new Error('Perfil no encontrado')
  }

  const updateProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true,})
  
  res.status(200).json(updateProfile)
})

const deleteProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id)

  if(!profile){
    res.status(400)
    throw new Error('Perfil no encontrado')
  }

  await profile.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getProfiles,
  setProfile,
  updateProfile,
  deleteProfile,
}

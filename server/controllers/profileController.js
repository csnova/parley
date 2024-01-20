const Profile = require("../models/profile");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display detail page for a profile.
exports.profile_details = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Profile Details");
});
// exports.profile_details = asyncHandler(async (req, res, next) => {
//   const [profile] = await Promise.all([
//     Profile.findByUserID(req.params.userID).exec(),
//   ]);

//   if (profile === null) {
//     // No results.
//     const err = new Error("Profile not found");
//     err.status = 404;
//     return next(err);
//   }
//   res.json({
//     profile: profile,
//   });
// });

// Handle profile update on POST.
exports.profile_update = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Profile Update");
});
// exports.profile_update = [
//   // Validate and sanitize fields.
//   body("name").trim(),
//   body("bio").trim(),
//   body("band").trim(),
//   body("movie").trim(),
//   body("book").trim(),

//   // Process request after validation and sanitization.
//   asyncHandler(async (req, res, next) => {
//     const [oldProfileData] = await Promise.all([
//       Profile.findByUserID(req.params.userID).exec(),
//     ]);
//     // Extract the validation errors from a request.
//     const errors = validationResult(req);
//     jwt.verify(
//       req.body.token,
//       process.env.JWT_SECRET,
//       async function (err, decoded) {
//         if (err) {
//           console.log(err);
//           res.status(401).send();
//         } else {
//           // Create Profile object with escaped and trimmed data
//           const profile = new Profile({
//             name: req.body.name,
//             bio: req.body.bio,
//             band: req.body.band,
//             movie: req.body.movie,
//             book: req.body.book,
//             _id: oldProfileData._id,
//           });

//           if (!errors.isEmpty()) {
//             // There are errors. Render form again with sanitized values/errors messages.
//             res.json({
//               errors: errors.array(),
//             });
//             return;
//           } else {
//             // Data from form is valid. Save Profile Update.
//             const updatedProfile = await Profile.findByIdAndUpdate(
//               oldProfileData,
//               _id,
//               profile
//             );
//             //Send Back Profile
//             res.json({
//               profile: {
//                 name: updateUser.name,
//                 bio: updateUser.bio,
//                 band: updateUser.band,
//                 movie: updateUser.movie,
//                 book: updateUser.book,
//               },
//             });
//           }
//         }
//       }
//     );
//   }),
// ];

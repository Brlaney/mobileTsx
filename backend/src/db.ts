import mongoose from "mongoose"

const connectToDB = async () => {
  try {
    const connection = mongoose.connect(
      "theLinkHere://"
    )

    if (connection) {
      console.log("connection established")
    }
  } catch (error) {
    console.log("Error in connectToDB", error)
    throw error
  }
}

export default connectToDB

import { checkAdminValidator } from "./user-type";
// import Views from "../../views";
import Views from "../../views/routes";

export default async function checkAdminLogin(
  { body: { email, password } }: { body: { email: string; password: string } },
  res: any) {
  try {
    await checkAdminValidator.validateAsync({ email, password },{ abortEarly: false });
    const isLoggedUser = await Views.UserViews.checkAdminLoginViews({ email, password });
    return res.status(200).json(isLoggedUser);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: "Failure",
        message: "Validation error occurred while Logging the Admin.",
        error: error.details.map((err: any) => err.message),
    }
  } else {
    console.error("An error occurred while Logging the Admin:", error);
    return {
      status: "Failure",
      message: "An error occurred while Logging in the Admin.",
      error: error.message || "Unknown error",
    };
  }
}
}

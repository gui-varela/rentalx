import { Router } from "express";

import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const passwordRoutes = Router();

const sendForgottenPasswordMailController =
  new SendForgotPasswordMailController();

passwordRoutes.post("/forgot", sendForgottenPasswordMailController.handle);

export { passwordRoutes };

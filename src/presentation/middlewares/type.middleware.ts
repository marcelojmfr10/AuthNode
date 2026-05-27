import { NextFunction, Request, Response } from "express";

export class TypeMiddleware {
  static validTypes(validTypes: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      // no funciona ya que el middleware se llama antes del método, a menos que se coloque como argumento en la ruta
      // const type = req.params.type;
      const type = req.url.split("/").at(2) ?? "";
      const validTypes = ["users", "products", "categories"];

      if (!validTypes.includes(type)) {
        return res
          .status(400)
          .json({ error: `Invalid type: ${type}, valid ones ${validTypes}` });
      }

      next();
    };
  }
}

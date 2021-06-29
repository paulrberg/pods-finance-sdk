import BigNumber from "bignumber.js";

export enum OptionType {
  Put = 0,
  Call = 1,
}

export enum ActionType {
  Buy = "Buy",
  Sell = "Sell",
  Mint = "Mint",
  Unmint = "Unmint",
  Resell = "Resell",
  AddLiquidity = "AddLiquidity",
  RemoveLiquidity = "RemoveLiquidity",
  Exercise = "Exercise",
  Withdraw = "Withdraw",
  TransferFrom = "TransferFrom",
  TransferTo = "TransferTo",
}

export const DEFAULT_TIMEOUT: number = 60 * 20;

export const MILESTONE_EXPIRATION_SOON: number = 60 * 60 * 24 * 3;

export const ALLOW_LOGS = (): boolean =>
  Boolean(
    String(process.env.REACT_APP_SDK_ALLOW_LOGS || "") === "true" ||
      String(process.env.SDK_ALLOW_LOGS || "") === "true"
  ) || true; // TODO

export const MAX_UINT = new BigNumber(2).exponentiatedBy(256).minus(1);

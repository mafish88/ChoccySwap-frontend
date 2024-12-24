import type { Amount, Asset } from "@chromia/ft4";

export type TokenInfo = {
    asset: Asset;
    amountToExchange: Amount;
    amountOwned: Amount;
}
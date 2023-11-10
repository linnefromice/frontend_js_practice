import FighterJetIcon from "../../assets/fighterJet.svg?react";
import ArmyTankIcon from "../../assets/armyTank.svg?react";
import BattleSoldierIcon from "../../assets/battleSoldier.svg?react";

export const UnitIcon = ({ unitType, className }: { unitType: number, className: string }): JSX.Element => {
  const props = {
    width: 24,
    height: 24,
    className,
  }

  if (unitType === 1) return <FighterJetIcon {...props} />
  if (unitType === 2) return <ArmyTankIcon {...props} />
  if (unitType === 3) return <BattleSoldierIcon {...props}/>
  return <></>
}

import {BarButton} from "../BarButton";
import styles from "./ControlCenter.module.sass";
import {Switch} from "@headlessui/react";
import {useStore} from "../../../lib/state/state";

export const ControlCenter: React.FC = () => {
  const store = useStore();

  return (
    <BarButton>
      <BarButton.Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29 29"
          width={16}>
          <path
            fill={store.darkMode ? 'white' : 'fill-dark-content'}
            d="M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z"/>
        </svg>
      </BarButton.Button>
    </BarButton>
  )
}

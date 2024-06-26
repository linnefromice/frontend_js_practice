import * as Popover from '@radix-ui/react-popover'
import './App.css'
import "./Popover.css"

const App = () => {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          Some more info…
          <Popover.Arrow  className="PopoverArrow"/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default App

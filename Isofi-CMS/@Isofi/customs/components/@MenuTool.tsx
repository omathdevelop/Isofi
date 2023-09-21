import { ToolMenuProps, ToolLink, Tool } from 'sanity'
import { Button, Flex } from '@sanity/ui'
import { FaPlug as PlugIcon} from 'react-icons/fa';
const MenuTool = (props: ToolMenuProps) => {
    const { activeToolName, context, tools } = props
    const isSidebar = context === 'sidebar'
    console.log({ isSidebar })
    // Change flex direction depending on context
    const direction = isSidebar ? 'column' : 'row'
    console.log({ direction })

    return (
        <Flex gap={1} direction={direction}>
            <p style={{color: 'green'}}></p>
            {tools.map((tool) => (
                <Button
                    as={ToolLink}
                    icon={tool['icon'] = PlugIcon}
                    key={tool.name}
                    name={tool.name}
                    padding={3}
                    selected={tool.name === activeToolName}
                    text={tool.title || tool.name}
                    tone="primary"
                />
            ))}
        </Flex>
    )
};

export default MenuTool;
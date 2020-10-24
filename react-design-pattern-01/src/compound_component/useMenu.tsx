import * as React from "react"

export type ValueOf<T> = T[keyof T]

export const TAB_TYPES = {
    HOME: "home",
    ABOUT: "about",
    OTHERS: "others"
}

export const tabData = [
    {
        text: 'Home',
        type: TAB_TYPES.HOME
    },
    {
        text: "About",
        type: TAB_TYPES.ABOUT
    },
    {
        text: 'Others',
        type: TAB_TYPES.OTHERS
    }
]

export const useMenu = (): {
    tabType: ValueOf<typeof TAB_TYPES>
    changeTab: (tabType: ValueOf<typeof TAB_TYPES>) => void
} => {
    const [tabType, setTabType] = React.useState<ValueOf<typeof TAB_TYPES>>(
        TAB_TYPES.HOME
    )
    const changeTab = React.useCallback(
        (tabType: ValueOf<typeof TAB_TYPES>) => {
            setTabType(tabType)
        },
        [tabType]
    )
    return { tabType, changeTab }
}
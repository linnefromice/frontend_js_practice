import { act, renderHook } from "@testing-library/react-hooks"
import { useMenu, TAB_TYPES } from "../compound_component/useMenu"

it('tab toggle', () => {
    const { result } = renderHook(() => useMenu())
    // 初期状態(Homeタブ)
    expect(result.current.tabType).toBe(TAB_TYPES.HOME)
    
    // Aboutタブに切り替え
    act(() => {
        result.current.changeTab(TAB_TYPES.ABOUT)
    })
    expect(result.current.tabType).toBe(TAB_TYPES.ABOUT)

    // Othersタブに切り替え
    act(() => {
        result.current.changeTab(TAB_TYPES.OTHERS)
    })
    expect(result.current.tabType).toBe(TAB_TYPES.OTHERS)
})
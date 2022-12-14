import { AbsoluteFill } from "remotion"

export const Violet = (props: any) => {
  const { opacity, zIndex } = props
  return <AbsoluteFill style={
    {
      opacity: opacity ?? 1,
      background: "#121716",
      zIndex: zIndex
    }
  }>
    {props.children}
  </AbsoluteFill>
}
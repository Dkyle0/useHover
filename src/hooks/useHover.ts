import { RefObject, useCallback, useEffect, useRef, useState } from "react"


export const useHover = (): {hovered: boolean, ref: RefObject<HTMLDivElement>} => {
	const ref = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);

	const handleMouseOver = useCallback(() => {
		setHovered(true);
	}, [setHovered]);
	const handleMouseOut = useCallback(() => {
		setHovered(false);
	}, [setHovered]);

	useEffect(() => {
		const element = ref.current;
		if (element) {
		  element.addEventListener('mouseover', handleMouseOver);
		  element.addEventListener('mouseout', handleMouseOut);
		}

		return () => {
			element?.removeEventListener('mouseover', handleMouseOver);
			element?.removeEventListener('mouseout', handleMouseOut);
		}
	}, [handleMouseOut, handleMouseOver, ref])

	return {hovered, ref}
}

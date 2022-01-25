import { RefObject, useEffect, useRef, useState } from "react";

import { Optional } from "@andrew-r-king/react-kitchen";

import { CanvasHelper, FlatContext } from "GL";

type OutProps = {
	ref: RefObject<HTMLCanvasElement>;
	error: Optional<Error>;
};

const useCanvas = (onLoad: (ctx: FlatContext) => void): [OutProps, Optional<FlatContext>] => {
	const ref = useRef<HTMLCanvasElement>(null);
	const [error, setError] = useState<Optional<Error>>(null);
	const [ctx, setCtx] = useState<Optional<FlatContext>>(null);

	useEffect(() => {
		if (!!ref.current) {
			let ctx = CanvasHelper.create2DContext(ref.current);
			if (!!ctx) {
				onLoad(ctx);
				setCtx(ctx);
			} else {
				setError(CanvasHelper.lastError);
			}
		}
	}, [ref.current]);

	return [{ ref, error }, ctx];
};

export { useCanvas };
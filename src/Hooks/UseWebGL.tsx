import { RefObject, useEffect, useRef, useState } from "react";

import { BootlegThree, CanvasHelper, WebGLContext } from "GL";
import { ClassType, Optional } from "Types";

type OutProps = {
	ref: RefObject<HTMLCanvasElement>;
	error: Optional<Error>;
	program3d: BootlegThree;
	gl: Optional<WebGLContext>;
	width: number;
	height: number;
	id: string;
};

function useWebGL<T extends BootlegThree>(program: ClassType<T>, id: string = "main-canvas"): OutProps {
	const ref = useRef<HTMLCanvasElement>(null);
	const [program3d] = useState<T>(new program());
	const [error, setError] = useState<Optional<Error>>(null);
	const [gl, setGL] = useState<Optional<WebGLContext>>(null);

	useEffect(() => {
		if (!!ref.current && gl === null) {
			let context = CanvasHelper.create3DContext(ref.current);
			if (!!context) {
				try {
					program3d.onLoad?.(context);
					program3d.onDraw?.(context);
					setGL(context);
				} catch (err: any) {
					setError(err);
				}
			} else {
				setError(CanvasHelper.lastError);
			}
		}
	}, [ref.current]);

	return {
		ref,
		error,
		program3d,
		gl,
		width: program3d.width ?? 400,
		height: program3d.height ?? 400,
		id,
	};
}

export { useWebGL };

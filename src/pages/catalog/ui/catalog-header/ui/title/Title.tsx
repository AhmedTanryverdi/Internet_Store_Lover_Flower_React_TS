import React from "react";
import { TAGS_MENU as TAGS } from "@/shared/lib/constants";
import { useAppDispatch } from "@/app/store";
import { setTags } from "@/features/slices/sidebar-filter/sidebarFilterSlice";
import "./styles.scss";

export const Title: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();

	return (
		<div className="title-block">
			<div className="title">
				<h2>каталог</h2>
				<h2>букетов</h2>
			</div>
			<div className="subtitle">
				В нашем магазине самый большой выбор букетов для любых событий:
			</div>
			<div className="tags">
				{TAGS.map((item, index) => {
					return (
						<span
							key={index}
							onClick={() => dispatch(setTags(item.tags))}
						>
							{item.title}
						</span>
					);
				})}
			</div>
		</div>
	);
};

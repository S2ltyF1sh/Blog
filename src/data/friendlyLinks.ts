export type Friend = {
	name: string;
	url: string;
	logo?: string;
	description?: string;
	target?: "_blank" | "_self";
	rel?: string;
	order?: number;
	visible?: boolean;
	addedAt?: string; // ISO
	reciprocal?: boolean;
	verified?: boolean;
};

export const friendlyLinks: Friend[] = [
	{
		name: "S2ltyF1sh",
		url: "https://github.com/S2ltyF1sh/Blog",
		logo: "/src/assets/logos/S2ltyF1sh.png",
		description: "自己的博客",
		target: "_blank",
		rel: "noopener noreferrer",
		order: 100,
		visible: true,
		addedAt: "2025-10-26",
		reciprocal: false,
		verified: true,
	},
	{
		name: "折乙大神",
		url: "https://zheyi.in/",
		logo: "/src/assets/logos/zheyi.png",
		description: "前端引路人（确信",
		target: "_blank",
		rel: "noopener noreferrer",
		order: 90,
		visible: true,
		addedAt: "2025-10-26",
		reciprocal: false,
		verified: true,
	},
	{
		name: "ggbond",
		url: "https://blog.ggbond-2025.top/",
		logo: "/src/assets/logos/ggbond.png",
		description: "后端战友（猪猪侠",
		target: "_blank",
		rel: "noopener noreferrer",
		order: 90,
		visible: true,
		addedAt: "2025-10-26",
		reciprocal: false,
		verified: true,
	},
];
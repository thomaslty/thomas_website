import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	ProjectsConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Thomas Website",
	subtitle: "Thomas's personal website",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 270, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Projects,
		{
			name: "GitHub",
			url: "https://github.com/thomaslty", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Thomas Lau",
	bio: "Software Engineer",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/thomaslty",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

export const projectsConfig: ProjectsConfig = {
	columns: 3,
	projects: [
		{
			title: "Peak Capital HK",
			href: "https://www.peak-capital.hk/",
			image: null,
			description:
				"Website for introduction of the company, and contact information with form submission.",
			tags: ["Client Project", "SPA", "HTML", "CSS", "JavaScript"],
		},
		{
			title: "Sunkids Kindergarten",
			href: "https://sunkids.edu.hk/",
			description:
				"Kindergarten website featuring an admissions CRM and a forum for parents, students, and teachers.",
			tags: ["Client Project", "HTML", "CSS", "JavaScript", "MongoDB"],
		},
		{
			title: "Next Station",
			href: "https://www.nextstation.uk/",
			description:
				"Property agent site featuring a CRM and real-time property data fetching.",
			tags: [
				"Client Project",
				"React",
				"Next.js",
				"PostgreSQL",
				"Redis",
				"Blob Storage",
			],
		},
	],
};

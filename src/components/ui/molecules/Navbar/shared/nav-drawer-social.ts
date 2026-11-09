import { profile } from "@data/portfolio/profile";

// Liens affichés en bas du menu mobile.
export function getNavDrawerSocialLinks(): Array<{ href: string; icon: string; label: string }> {
	return [
		{ href: profile.links.linkedin, icon: "ph ph-linkedin-logo", label: "LinkedIn" },
		{ href: profile.links.github, icon: "ph ph-github-logo", label: "GitHub" },
		{ href: `mailto:${profile.email}`, icon: "ph ph-envelope-simple", label: "E-mail" },
	];
}

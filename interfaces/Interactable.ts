export default interface Interactable {
	interactive: true;
	onClick: (event: MouseEvent) => void;
}
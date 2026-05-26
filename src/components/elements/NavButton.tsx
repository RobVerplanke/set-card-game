import type { NavButtonProps } from '../../types/Header';

export default function NavButton({ label }: NavButtonProps) {
  return (
    <>
      <button>{label}</button>
    </>
  );
}

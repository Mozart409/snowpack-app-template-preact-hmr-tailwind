import { h } from 'preact';
export default function Footer() {
  return (
    <div className="flex justify-center">
      <p className="text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} YOURNAME.
      </p>
    </div>
  );
}

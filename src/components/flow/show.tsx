interface ShowProps {
  when: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function Show(props: ShowProps) {
  return props.when ? props.children : props.fallback;
}
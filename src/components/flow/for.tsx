interface ForProps<T> {
  each: T[];
  children: (item: T, index: number) => React.ReactNode;
  fallback?: React.ReactNode;
}

export default function For<T>(props: ForProps<T>) {
  return props.each.length > 0 ? props.each.map((item, index) => props.children(item, index)) : props.fallback;
}
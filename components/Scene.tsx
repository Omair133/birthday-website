interface SceneProps {
  children: React.ReactNode;
  id?: string;
}

export default function Scene({
  children,
  id,
}: SceneProps) {
  return (
    <section
      id={id}
      className="h-screen snap-start snap-always"
    >
      <div className="flex h-full items-center justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-8">
          {children}
        </div>
      </div>
    </section>
  );
}
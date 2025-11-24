type ChildProps = {
  states: string[];
};

export default function Child({ states = [] }: ChildProps) {
  return (
    <div className="child-box">
      <p><strong>States passed from parent:</strong></p>
      <ul>
        {states.map((state, index) => (
          <li key={index}>{state}</li>
        ))}
      </ul>
    </div>
  );
}


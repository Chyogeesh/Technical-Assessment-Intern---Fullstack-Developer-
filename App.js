// src/App.js
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header />
      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Card 1" description="This is card 1." />
        <Card title="Card 2" description="This is card 2." />
        <Card title="Card 3" description="This is card 3." />
      </main>
    </div>
  );
}

export default App;
// src/App.js
import React, { useEffect } from 'react';
import { supabase } from './supabaseClient';
import { useStore } from './store';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const { items, setItems } = useStore();

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await supabase.from('items').select('*');
      setItems(data);
    };

    fetchItems();
  }, [setItems]);

  return (
    <div>
      <Header />
      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} />
        ))}
      </main>
    </div>
  );
}

export default App;

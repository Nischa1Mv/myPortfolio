/**
 * Color Demo Component
 * 
 * This component demonstrates how to use the color system.
 * You can import this into any page to see all available colors.
 */

import React from 'react';
import { colors } from '../lib/colors';

const ColorDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Color System Demo</h2>
      
      {/* Primary Colors */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary-foreground">Primary Colors</h3>
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">Primary</span>
          </div>
        </div>
      </div>

      {/* Secondary Colors */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary-foreground">Secondary Colors</h3>
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-secondary border-2 border-border rounded-lg flex items-center justify-center">
            <span className="text-secondary-foreground text-xs font-bold">Secondary</span>
          </div>
        </div>
      </div>

      {/* Card Colors */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary-foreground">Card Colors</h3>
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-card border-2 border-border rounded-lg flex items-center justify-center">
            <span className="text-card-foreground text-xs font-bold">Card</span>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-foreground">Usage Examples</h3>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <h4 className="text-primary font-bold mb-2">Card with Primary Title</h4>
          <p className="text-card-foreground">This is how text looks on a card background.</p>
        </div>

        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Primary Button
        </button>

        <div className="bg-secondary p-4 rounded-lg">
          <p className="text-secondary-foreground">Text on secondary background</p>
        </div>
      </div>

      {/* Color Values */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary-foreground">Color Values</h3>
        <div className="bg-card p-4 rounded-lg border border-border">
          <pre className="text-sm text-card-foreground">
            {JSON.stringify(colors, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ColorDemo;

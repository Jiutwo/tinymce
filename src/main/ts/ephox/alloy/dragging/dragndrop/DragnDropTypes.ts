import * as Behaviour from '../../api/behaviour/Behaviour';
import { AlloyComponent } from '../../api/component/ComponentApi';
import { Element } from '@ephox/sugar';
import { NativeSimulatedEvent } from '../../events/SimulatedEvent';
import { DragnDropImageClone } from './ImageClone';
import { DropEvent } from './DropEvent';
import { DragStartingConfig } from './DragStarting';
import { DroppingConfig } from './Dropping';

export interface DragnDropBehaviour extends Behaviour.AlloyBehaviour<DragnDropConfigSpec, DragnDropConfig> {
  config: (config: DragnDropConfigSpec) => Behaviour.NamedConfiguredBehaviour<DragnDropConfigSpec, DragnDropConfig>;
}

export type DragnDropConfig = DragStartingConfig | DroppingConfig;

export interface StartingDragndropConfigSpec {
  mode: 'drag',
  type?: string;
  getData?: (component: AlloyComponent) => string;
  getImage?: (component: AlloyComponent) => DragnDropImageClone;
  canDrag?: (component: AlloyComponent, target: Element) => boolean;
  onDragstart?: (component: AlloyComponent, simulatedEvent: NativeSimulatedEvent) => void;
  onDragover?: (component: AlloyComponent, simulatedEvent: NativeSimulatedEvent) => void;
  onDragend?: (component: AlloyComponent, simulatedEvent: NativeSimulatedEvent) => void;
  phoneyTypes?: string[];
  dropEffect?: 'copy' | 'move' | 'link' | 'none';
}

export interface DropDragndropConfigSpec {
  mode: 'drop',
  type?: string;
  onDrop?: (component: AlloyComponent, simulatedEvent: DropEvent) => void;
  onDrag?: (component: AlloyComponent, simulatedEvent: NativeSimulatedEvent) => void;
  onDragover?: (component: AlloyComponent, simulatedEvent: NativeSimulatedEvent) => void;
  onDragenter?: (component: AlloyComponent, simulatedEvent: NativeSimulatedEvent) => void;
  onDragleave?: (component: AlloyComponent, simulatedEvent: NativeSimulatedEvent) => void;
}

export type DragnDropConfigSpec = StartingDragndropConfigSpec | DropDragndropConfigSpec;


import { create } from 'zustand';

interface RoleState {
  role: 'Self-Grower' | 'Exchanger' | 'Seller' | null;
  setRole: (role: 'Self-Grower' | 'Exchanger' | 'Seller') => void;
}

export const useRoleStore = create<RoleState>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
}));

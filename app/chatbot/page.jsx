'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, {
    addEdge,
    Background,
    Controls,
    MiniMap,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
  } from 'reactflow';
import { Suspense } from "react";
import 'reactflow/dist/style.css';
import FlowBuilder from "../components/FlowBuilder";
export default function ChatbotFlowPage() {
  return (
    <ReactFlowProvider>
    <Suspense fallback={<div>Loading chatbot...</div>}>
      <FlowBuilder />
      </Suspense>
    </ReactFlowProvider>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { learningTabs } from '@/data/learningNotes';
import { BookOpen, X, ChevronRight } from 'lucide-react';

export default function LearningNotes() {
  const [activeTab, setActiveTab] = useState(learningTabs[0].id);
  const [selectedNote, setSelectedNote] = useState<string | null>(null);

  const currentTab = learningTabs.find((tab) => tab.id === activeTab);
  const selectedNoteData = currentTab?.notes.find((note) => note.id === selectedNote);

  return (
    <Section>
      <SectionTitle
        title="Learning Notes"
        subtitle="Comprehensive study notes and key concepts across technologies and skills"
      />

      {/* Tab Navigation */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          {learningTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedNote(null);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.icon}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Notes Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentTab?.notes.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedNote(note.id)}
              className="group cursor-pointer relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20">
                    <BookOpen className="w-5 h-5 text-violet-400" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-violet-400 transition-colors" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {note.title}
                </h3>
                
                <p className="text-sm text-gray-400 line-clamp-3">
                  {note.content.substring(0, 100)}...
                </p>

                {note.keyPoints && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-1 rounded-full bg-white/5">
                      {note.keyPoints.length} key points
                    </span>
                    {note.examples && (
                      <span className="px-2 py-1 rounded-full bg-white/5">
                        {note.examples.length} examples
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Note Detail Dialog */}
      <AnimatePresence>
        {selectedNoteData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNote(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 shadow-2xl"
            >
              {/* Dialog Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-gray-900/95 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20">
                    <BookOpen className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {selectedNoteData.title}
                    </h2>
                    <p className="text-xs text-gray-400">{currentTab?.label}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="p-2 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Dialog Content */}
              <div className="p-6 space-y-6">
                {/* Main Content */}
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                    {selectedNoteData.content}
                  </div>
                </div>

                {/* Key Points */}
                {selectedNoteData.keyPoints && selectedNoteData.keyPoints.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-violet-600 to-cyan-600 rounded-full" />
                      Key Points
                    </h3>
                    <ul className="space-y-3">
                      {selectedNoteData.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-white text-xs font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Examples */}
                {selectedNoteData.examples && selectedNoteData.examples.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-cyan-600 to-violet-600 rounded-full" />
                      Code Examples
                    </h3>
                    <div className="space-y-3">
                      {selectedNoteData.examples.map((example, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl bg-black/30 border border-white/5 font-mono text-sm text-gray-300 overflow-x-auto"
                        >
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 px-2 py-1 rounded bg-violet-600/20 text-violet-400 text-xs font-bold">
                              EX {index + 1}
                            </span>
                            <pre className="whitespace-pre-wrap flex-1">
                              {example}
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dialog Footer */}
              <div className="sticky bottom-0 p-6 border-t border-white/10 bg-gray-900/95 backdrop-blur-sm">
                <button
                  onClick={() => setSelectedNote(null)}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

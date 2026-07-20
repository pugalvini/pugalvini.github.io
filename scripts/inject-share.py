import glob

files = glob.glob('src/pages/BlogPost*.jsx')

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    if 'import ShareWidget' not in content:
        # Insert import after ReactionWidget
        content = content.replace(
            "import ReactionWidget from '../components/ReactionWidget';",
            "import ReactionWidget from '../components/ReactionWidget';\nimport ShareWidget from '../components/ShareWidget';"
        )
        
    if '<ShareWidget' not in content:
        # Insert <ShareWidget /> before <ReactionWidget
        content = content.replace(
            '<ReactionWidget',
            '<ShareWidget />\n                <ReactionWidget'
        )
        
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Injected ShareWidget into {filepath}")

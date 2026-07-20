import os
import glob

files = glob.glob('src/pages/BlogPost*.jsx')

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check what imports are missing and add them right after "import React"
    imports_to_add = []
    
    if 'import SEO' not in content:
        imports_to_add.append("import SEO from '../components/SEO';")
    if 'import ReadProgress' not in content:
        imports_to_add.append("import ReadProgress from '../components/ReadProgress';")
    if 'import ReactionWidget' not in content:
        imports_to_add.append("import ReactionWidget from '../components/ReactionWidget';")
    if 'import BlogComments' not in content:
        imports_to_add.append("import BlogComments from '../components/BlogComments';")
        
    if imports_to_add:
        # Find the end of the React import line
        react_import_end = content.find("import React")
        if react_import_end != -1:
            line_end = content.find('\n', react_import_end)
            if line_end != -1:
                # Insert the new imports right after the React import line
                new_imports_str = '\n' + '\n'.join(imports_to_add)
                content = content[:line_end] + new_imports_str + content[line_end:]
    
    # Also, if <SEO /> was never added, add it right after <ReadProgress />
    if '<SEO' not in content:
        content = content.replace(
            '<ReadProgress />',
            '<ReadProgress />\n            <SEO title="Blog Post" description="Technical article" url={window.location.href} />'
        )
        
    with open(filepath, 'w') as f:
        f.write(content)
        print(f"Fixed {filepath}")
